pipeline {
    agent {
        label 'ubuntu-server'
    }
    environment {
        RUN_USER = 'trongduong'
        BUILD_FOLDER = '/home/trongduong/projects/IdentityReact'
        BUILD_SCRIPT = 'npm run build'
    }
    stages {
        stage('Build ReactJS') {
            steps {
                sh(script: """sudo su - ${RUN_USER} -c 'cd ${BUILD_FOLDER} && ${BUILD_SCRIPT}'""")
            }
        }
    }
}
