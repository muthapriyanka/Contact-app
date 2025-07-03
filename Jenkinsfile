
pipeline {
    agent any
        environment {
            DOCKER_HOST = 'unix:///var/run/docker.sock'
        }

        stages {
            stage('Clone') {
                steps {
                    git branch: 'main', url: 'https://github.com/muthapriyanka/Contact-app.git'
                }
            }
        
            stage('Build & Push Backend Image') {
                steps {
                    dir('backend') {
                        withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                            sh '''
                                mkdir -p ~/.docker && echo "{ \"credsStore\": \"\" }" > ~/.docker/config.json
                                echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                                docker build -t pmutha27/contact-backend:latest .
                                docker push pmutha27/contact-backend:latest
                            '''
                        }
                    }
                }
            }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
        
}


// pipeline {
//     agent any

//     environment {
//         DOCKER_USER = credentials('docker-username')
//         DOCKER_PASS = credentials('docker-password')
//         DOCKER_HOST = 'unix:///var/run/docker.sock'
//     }
    
//     stages {
//         stage('Clone') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/muthapriyanka/Contact-app.git'
//             }
//         }
//         stage('Build & Push Backend Image') {
//             steps {
//                 dir('backend') {
//                     sh '''
//                         docker build -t your-dockerhub-username/contact-backend:latest .
//                         echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
//                         docker push your-dockerhub-username/contact-backend:latest
//                     '''
//                 }
//             }
//         }
//         stage('Deploy to Kubernetes') {
//             steps {
//                 sh 'kubectl apply -f k8s/'
//             }
//         }
//     }
    
// }
