pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/muthapriyanka/Contact-app.git'
            }
        }
        stage('Build & Push Backend Image') {
            steps {
                dir('backend') {
                    sh '''
                        docker build -t your-dockerhub-username/contact-backend:latest .
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push your-dockerhub-username/contact-backend:latest
                    '''
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
    environment {
        DOCKER_USER = credentials('pmutha27')
        DOCKER_PASS = credentials('docker-password')
    }
}
