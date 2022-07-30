# Volvo Safety Page Test Suits

This repository contains source code for the 
volvo safety page test suits using WebDriverIO.

The test suit was written for the page [volvocarsafety](https://www.volvocars.com/intl/v/car-safety/a-million-more).

## 1. Contributing

Useful links to resource related to working this testcases can be found below.

### Local Environment Configuration

* The current **testcase** project setup guide can be found [here](https://webdriver.io/docs/gettingstarted).


### 1.1 Docker 

 The test suit can also be run using docker, uncomment the **Docker Setup For Selenium** section in the wdio.conf.ts before running the suite. [More Info](https://webdriver.io/docs/wdio-docker-service)

### 1.2 Parallel Testing 

  The to run the test parallely in different browser, uncomment the **Local Parallel Running** section in the wdio.conf.ts before running the suite. [More Info](https://webdriver.io/docs/organizingsuites)

### 1.3 Visual Regression Testing

  To check that any code changes did not affect the UI by comparing screenshots from before and after, uncomment the **Visual Regression Testing** section in the wdio.conf.ts before running the suite. [More Info](https://webdriver.io/docs/wdio-image-comparison-service/)

### 1.4 Test Execution Through Kubernates

  To run the test scripts in the kubernetes with selenium grid setup, uncomment the **Kubernete for Selenium** section in the wdio.conf.ts before running the suite. [More Info](kubernate.md)

### 1.5 Test Suit Reporting Using Allure

  The test cases reports are automatically generated using Allure Reporting, uncomment the **AutoGenerate Allure Report** section in the wdio.conf.ts before running the suite.[More Info](https://webdriver.io/docs/allure-reporter/)


## 2. Test Case Details

### 2.1 Test Cases - Safety.ts

Case 1: **should show the header container**

Case 2: **should verify the volvo label and verify the url**

Case 3: **should verify our cars button is clickable**

Case 4: **should verify menu button is clickable**

Case 5: **should show the button on the video and it should be clickable**

Case 6: **should show the text on the button in the video**

Case 7: **should show the list of car models and verify the total**

Case 8: **should contain link on the recharge text and verify the href**

Case 9: **should contain link on the mild hybrid cars text and verify the href**

Case 10: **should contain safety features and verify the count**

Case 11: **should verify the safety features in the cars**

Case 12: **should contain video testimonial and verify the count**

Case 13: **should verify the video testimonial names**

Case 14: **should have hybrid models and verify the length**

Case 15: **should have hybrid models and verify the names**

### 2.2 Test Cases for Visual Regression - VisualRegression.ts

Case 1: **should save some screenshots**

Case 2: **should compare successful with a baseline**

### 2.3 Test Framework Optimization

- Implemented PageObject which have properties and methods  using typescripts
- All the hardcoded values are kept in the resources to keep the test suit clean and simple
- Specs folder contains the test receipes and visual regression test cases
- Allure reports are automatically generates in the allure results folder, user can view the report by the command 'allure open'


## 3. Execution through Containers

### 3.1 Docker

* Build docker using the below command to create the docker image
  - docker build -t volvo -f Dockerfile .
* Run the image in the container using the below command 
  - docker run -it volvo

### 3.2 Kubernetes
 
#### SetUp
- Installing Minikube 
- Installing Docker
- Installing Kubectl
- Deploying and Setting up Selenium Grid on Kubernetes
- Running Selenium Automation scripts on Kubernetes

#### Adavantage of running in Kubernete

- Kubernetes is a Container Management Tool and by setting   up Selenium Grid on Kubernetes, we get the below benefits
  - Scalable
  - Self Healing Containers
  - Less maintainable
  - Better utilized and 
  - High available Containers

#### We are using minikube to run this test suit in the kubernetes on our personal computer

- Steps to run the test cases in the minikube
  - Start Minikube
    - Open command prompt and execute minikube start
  - Check Kubernetes Dashboard
    - minikube dashboard 
    - Open command prompt in administration mode for the above command to work
  - Deploy Selenium Hub on Kubernetes Pod
    - kubectl create -f selenium-hub-deployment.yaml
    - Check Kubernetes Dashboard
  - Deploy Kubernetes Service
    - kubectl create -f selenium-hub-svc.yaml
  - Deploy Selenium Chrome Container on another Pod
    - kubectl create -f selenium-node-chrome-deployment.yaml
    - Check Kubernetes Dashboard
  - Find Selenium Grid Console 
    - minikube service selenium-hub --url
    - Take the first ip address and port number and open this in any browser to see the console
    - Give it some time for everything to get reflected
  - Run the Sample Selenium Grid code from our local machine and see it getting executed on Kubernetes
  - Delete the selenium-hub, service and nodes from Kubernetes
    - kubectl delete -f selenium-hub-deployment.yaml
    - kubectl delete -f selenium-hub-svc.yaml
    - kubectl delete -f selenium-node-chrome-deployment.yaml
    - Check Kubernetes Dashboard
  - Stop Minikube
    - minikube stop
  - Delete Minikube
    - minikube delete

#### Note : The yaml deployment files can be found [here](https://github.com/kubernetes/examples/tree/master/staging/selenium)
