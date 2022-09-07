# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List, Dict, TypeVar
from thrift.py3 import Struct
import ast
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, angle_for, R, Just, InnerGleanSchemaPredicate


from glean.schema.searchhs.types import (
    hsSearchByName,
)


class SearchHsSearchByName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], name: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"search.hs.SearchByName.9 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, name, 'name'), angle_for(__env, entity, 'entity')])) or '_' } }}", hsSearchByName

  @staticmethod
  def angle_query(*, name: Optional[str] = None, entity: Optional["CodeHsEntity"] = None) -> "SearchHsSearchByName":
    raise Exception("this function can only be called from @angle_query")






