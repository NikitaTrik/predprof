from sqlalchemy.orm import Session
from . import models, schemas
import json
from fastapi import HTTPException


def get_air_data(db: Session):
    return db.query(models.Air).order_by(models.Air.id.desc()).first()


def create_air_data(db: Session, air: schemas.AirBase):
    db_air = models.Air(temperature=air.temperature, humidity=air.humidity)
    db.add(db_air)
    db.commit()
    db.refresh(db_air)
    return db_air


def get_ground_data(db: Session):
    return db.query(models.Ground).order_by(models.Ground.id.desc()).first()


def create_ground_data(db: Session, ground: schemas.AirBase):
    db_ground = models.Ground(humidity=ground.humidity)
    db.add(db_ground)
    db.commit()
    db.refresh(db_ground)
    return db_ground
