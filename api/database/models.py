from sqlalchemy import Column, Integer, Float


from .database import Base


class Air(Base):
    __tablename__ = "air sensors"

    id = Column(Integer, primary_key=True)
    number = Column(Integer)
    temperature = Column(Float)
    humidity = Column(Float)


class Ground(Base):
    __tablename__ = "ground sensors"

    id = Column(Integer, primary_key=True)
    number = Column(Integer)
    humidity = Column(Float)