pipeline{
  agent{
    label 'ubuntu-server'
  }
  environment{
    RUN_USER = 'trongduong'
    BUILD_FOLDER = '/home/trongduong/projects/deploy-fe'
    BUILD_SCRIPT = 'npm run build'
  }
  stages{
    stage('info'){
      steps{
        sh(script: """ pwd; ls -a; whoami""")
      }
    }
  }
}