# COVID-19 REST API

## Description

This REST API provides some (but not all) datasets from the given data source in `JSON` format.

Following are the datasets provided by the API:

-   `AgeGroupDetails.csv`

-   `HospitalBedsIndia.csv`

-   `population_india_census2011.csv`

## Running locally using `docker`

-   Build image

    ```bash
    make build
    ```

-   Run image as a container

    ```bash
    make run
    ```

-   Stop running container
    ```bash
    make stop
    ```

### Data Source

[https://www.kaggle.com/sudalairajkumar/covid19-in-india](https://www.kaggle.com/sudalairajkumar/covid19-in-india)

#### Note

_This project was created to be submitted as an assignment, and is not one of my personal projects._
