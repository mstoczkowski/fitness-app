from fastapi import APIRouter

from .exercises import list_exercises, ExerciseOut

router = APIRouter(prefix="/api/v1", tags=["v1"])

@router.get("/exercises", response_model=list[ExerciseOut])
def get_exercises():
    return list_exercises()
