pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/YOUR_USERNAME/node-calculator.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        
        stage('Test Coverage') {
            steps {
                bat 'npm run test:coverage'
            }
            post {
                always {
                    publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Jest Coverage Report'
                    ]
                }
            }
        }
    }
    
    post {
        always {
            echo "Build Result: ${currentBuild.result}"
        }
        success {
            echo '🎉 Build and tests completed successfully!'
        }
        failure {
            echo '❌ Build or tests failed!'
        }
    }
}