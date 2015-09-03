#include <nan.h>
#include "string.h"
#include "../create_string.h"

namespace SassTypes
{
  String::String(Sass_Value* v) : SassValueWrapper(v) {}

  Sass_Value* String::construct(const std::vector<v8::Local<v8::Value>> raw_val) {
    char const* value = "";

    if (raw_val.size() >= 1) {
      if (!raw_val[0]->IsString()) {
        throw std::invalid_argument("Argument should be a string.");
      }

      value = create_string(raw_val[0]);
    }

    return sass_make_string(value);
  }

  void String::initPrototype(v8::Local<v8::FunctionTemplate> proto) {
    Nan::SetPrototypeMethod(proto, "getValue", GetValue);
    Nan::SetPrototypeMethod(proto, "setValue", SetValue);
  }

  NAN_METHOD(String::GetValue) {
    info.GetReturnValue().Set(Nan::New<v8::String>(sass_string_get_value(unwrap(info.This())->value)).ToLocalChecked());
  }

  NAN_METHOD(String::SetValue) {
    if (info.Length() != 1) {
      return Nan::ThrowTypeError(Nan::New("Expected just one argument").ToLocalChecked());
    }

    if (!info[0]->IsString()) {
      return Nan::ThrowTypeError(Nan::New("Supplied value should be a string").ToLocalChecked());
    }

    sass_string_set_value(unwrap(info.This())->value, create_string(info[0]));
  }
}
