from sqlalchemy import Boolean, Column, Integer, DateTime,  JSON
from sqlalchemy.orm import relationship

from .database import Base


class Air(Base):
    __tablename__ = "air sensors"

    id = Column(Integer, primary_key=True)
    temperature = Column(Integer)
    humidity = Column(Integer)


class Ground(Base):
    __tablename__ = "ground sensors"

    id = Column(Integer, primary_key=True)
    humidity = Column(Integer)
