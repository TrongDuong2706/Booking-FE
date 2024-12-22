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
        stage('test') {
            steps {
                sh(script: """ pwd; ls-a;whoami """)
            }
        }
       
    }
}
