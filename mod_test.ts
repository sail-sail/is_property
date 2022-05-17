import { assert } from "https://deno.land/std@0.139.0/testing/asserts.ts";
import { isProperty } from "./mod.ts";

Deno.test("isProperty", function() {
  assert(isProperty("foo"))
  assert(!isProperty(".foo"))
  assert(!isProperty("a.b.c"))
  assert(isProperty("_joke"))
  assert(isProperty("j_a_b_c"))
  assert(isProperty("f00"))
  assert(!isProperty("0bad"))
  assert(isProperty("break"))
  assert(!isProperty("@context"))
});
