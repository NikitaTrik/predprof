from pydantic import BaseModel


class AirBase(BaseModel):
    number: int
    temperature: float
    humidity: float


class Air(BaseModel):
    id: int


class GroundBase(BaseModel):
    number: int
    humidity: float


class Ground(GroundBase):
    id: int
