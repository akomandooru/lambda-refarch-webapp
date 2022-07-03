// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "34iruoiui6303k82hcifivh99m",     // CognitoClientID
  "api_base_url": "https://x4zgo44l1j.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-webapp.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1kbruamhp8jie.amplifyapp.com"                                      // AmplifyURL
};

export default config;
