// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6mdr8kiu8c04pksjb8u9mhct3r",     // CognitoClientID
  "api_base_url": "https://1ip5umg6p8.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-webapp.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1ctqvdum7n9d7.amplifyapp.com"                                      // AmplifyURL
};

export default config;
