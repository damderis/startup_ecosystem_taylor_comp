# create_db.py
from backend.models import Base, engine

# Create the database tables
Base.metadata.create_all(bind=engine)
