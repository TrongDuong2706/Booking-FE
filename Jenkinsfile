pipeline {
    agent {
        label 'ubuntu-server'
    }
    environment {
        RUN_USER = 'trongduong'
        BUILD_SCRIPT = 'npm run build'
        DIST_FOLDER = '/home/trongduong/projects/IdentityReact/dist'
        BUILD_FOLDER = '/home/trongduong/projects/IdentityReact/'
        COPPY_SCRIPT = "sudo cp -r dist ${BUILD_FOLDER}"
    }
    stages {
        stage('Clean Dist Folder') {
            steps {
                sh(script: """sudo su - ${RUN_USER} -c 'rm -rf ${DIST_FOLDER}'""")
            }
        }
        stage('Build ReactJS') {
            steps {
                sh(script: """ ${BUILD_SCRIPT} """, "Build project")
                sh(script: """ ${COPPY_SCRIPT} """)
            }

        }
    }
}
