pipeline {
  agent any

  environment {
    BROWSERSTACK_USERNAME = credentials('BROWSERSTACK_USERNAME')
    BROWSERSTACK_ACCESS_KEY = credentials('BROWSERSTACK_ACCESS_KEY')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Node.js') {
      steps {
        sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash'
        sh '''
          export NVM_DIR="$HOME/.nvm"
          source $NVM_DIR/nvm.sh
          nvm install 18
          nvm use 18
          npm install
        '''
      }
    }

    stage('Run BrowserStack Remote Test') {
      steps {
        sh '''
          export NVM_DIR="$HOME/.nvm"
          source $NVM_DIR/nvm.sh
          nvm use 18
          npm run sample-test
        '''
      }
    }

    stage('Run Local Test (optional)') {
      when {
        expression { return fileExists('src/sample-local.test.js') }
      }
      steps {
        sh '''
          export NVM_DIR="$HOME/.nvm"
          source $NVM_DIR/nvm.sh
          nvm use 18
          npm run sample-local-test
        '''
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/*.png', fingerprint: true
    }
    failure {
      echo "❌ Tests failed. Check the logs."
    }
    success {
      echo "✅ All tests passed!"
    }
  }
}
