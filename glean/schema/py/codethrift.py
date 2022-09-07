# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List, Dict, TypeVar
from thrift.py3 import Struct
import ast
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, angle_for, R, Just, InnerGleanSchemaPredicate


from glean.schema.codethrift.types import (
    thriftAnnotations,
    thriftEntity,
)




class CodeThriftAnnotations(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], annotations: ast.Expr) -> Tuple[str, Struct]:
    return f"code.thrift.Annotations.4 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, annotations, 'annotations')])) or '_' } }}", thriftAnnotations

  @staticmethod
  def angle_query_annotations(*, annotations: List["ThriftStructuredAnnotation"]) -> "CodeThriftAnnotations":
    raise Exception("this function can only be called from @angle_query")




class CodeThriftEntity(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], include_: ast.Expr, named: ast.Expr, exception_: ast.Expr, service_: ast.Expr, constant: ast.Expr, enumValue: ast.Expr) -> Tuple[str, Struct]:
    return f"code.thrift.Entity.4 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, include_, 'include_'), angle_for(__env, named, 'named'), angle_for(__env, exception_, 'exception_'), angle_for(__env, service_, 'service_'), angle_for(__env, constant, 'constant'), angle_for(__env, enumValue, 'enumValue')])) or '_' } }}", thriftEntity

  @staticmethod
  def angle_query_include_(*, include_: "ThriftFile") -> "CodeThriftEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_named(*, named: "ThriftNamedDecl") -> "CodeThriftEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_exception_(*, exception_: "ThriftExceptionName") -> "CodeThriftEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_service_(*, service_: "ThriftServiceName") -> "CodeThriftEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_constant(*, constant: "ThriftConstant") -> "CodeThriftEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_enumValue(*, enumValue: "ThriftEnumValue") -> "CodeThriftEntity":
    raise Exception("this function can only be called from @angle_query")





