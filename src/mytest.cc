#include <node.h>
#include <uv.h>

#include<resolv.h>


using namespace v8;

void Init(Handle<Object> exports, Handle<Object> module) {


}

NODE_MODULE(mytest, Init)
