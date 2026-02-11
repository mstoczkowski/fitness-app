from pydantic import BaseModel


class ExerciseOut(BaseModel):
    id: str
    name: str
    equipment: str | None = None
    primary_muscle: str | None = None


# Temporary in-memory data (we'll move to DB later)
EXERCISES = [
    ExerciseOut(id="bench_press", name="Bench Press", equipment="barbell", primary_muscle="chest"),
    ExerciseOut(id="squat", name="Back Squat", equipment="barbell", primary_muscle="legs"),
    ExerciseOut(id="deadlift", name="Deadlift", equipment="barbell", primary_muscle="back"),
]


def list_exercises() -> list[ExerciseOut]:
    return EXERCISES
