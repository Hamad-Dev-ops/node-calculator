pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Build environment (dev/test/prod)')
        string(name: 'STUDENT_NAME', defaultValue: 'Your Name', description: 'Provide your name here. No name, no marks.')
    }

    environment {
        APP_VERSION = "1.0.0"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies..."
                bat "npm install"
            }
        }

        stage('Build') {
            steps {
                echo "Building Calculator App v${APP_VERSION} on branch ${params.BRANCH_NAME}"
                bat "npm run build"
            }
        }

        stage('Unit Test') {
            when {
                expression { params.BUILD_ENV == 'dev' }
            }
            steps {
                echo "Running unit tests with Jest..."
                bat "npm test"
            }
        }

        stage('Deploy') {
            steps {
                echo "Simulating deployment of Node.js Calculator App..."
                bat "echo Deploying version ${APP_VERSION} for ${params.BUILD_ENV} environment"
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace..."
            // deleteDir()  // uncomment if cleanup is required
        }
        success {
            echo "Pipeline executed successfully."
        }
        failure {
            echo " Pipeline failed."
        }
    }
}
