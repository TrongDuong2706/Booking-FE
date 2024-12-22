pipeline {
    agent {
        label 'ubuntu-server'
    }
    environment {
        RUN_USER = 'trongduong'
        BUILD_FOLDER = '/home/trongduong/projects/IdentityReact'
        BUILD_SCRIPT = 'npm run build'
        DIST_FOLDER = '/home/trongduong/projects/IdentityReact/dist'
    }
    stages {
        stage('Clean Dist Folder') {
            steps {
                sh(script: """sudo su - ${RUN_USER} -c 'rm -rf ${DIST_FOLDER}'""")
            }
        }
        stage('Build ReactJS') {
            steps {
                sh(script: """sudo su - ${RUN_USER} -c 'cd ${BUILD_FOLDER} && ${BUILD_SCRIPT}'""")
            }
        }
    }
}
