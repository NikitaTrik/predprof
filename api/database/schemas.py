from pydantic import BaseModel
from typing import Dict, List


class AirBase(BaseModel):
    temperature: int
    humidity: int


class Air(BaseModel):
    id: int


class GroundBase(BaseModel):
    humidity: int


class Ground(GroundBase):
    id: int
