from fastapi import Depends, FastAPI, HTTPException, Query
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from database import CRUD, models, schemas
from database.database import SessionLocal, engine
import requests,json


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/air/get")
def get_air_data(db: Session = Depends(get_db)):
    return CRUD.get_air_data(db)


@app.get("/ground/get")
def get_ground_data(db: Session = Depends(get_db)):
    return CRUD.get_ground_data(db)


@app.post("/air/create")
def create_air_data(air: schemas.AirBase, db: Session = Depends(get_db)):
    return CRUD.create_air_data(db, air)


@app.post("/ground/create")
def create_ground_data(ground: schemas.GroundBase, db: Session = Depends(get_db)):
    return CRUD.create_ground_data(db, ground)

