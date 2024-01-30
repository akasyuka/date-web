npm start

# ci/cd
docker build -t date-web:1.0 .
docker tag date-web:1.0 akasyuka/date-web:1.0
docker push akasyuka/date-web:1.0
docker run --network host -d -p 80:3000 akasyuka/date-web:1.0