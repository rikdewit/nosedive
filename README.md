# Nosedive

## Install instructions

You should have python3 installed.
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata fixtures/initial.json
chmod +x ./run.sh 
./run.sh
```

