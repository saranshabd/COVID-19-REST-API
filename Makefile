build:
	docker build --tag covid-19:latest .

run:
	docker run --rm -d -p 8081:8081 --name covid-19 covid-19:latest

stop:
	docker stop covid-19
