use of terraform:
    Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently.

Terraform Lifecycle resource:
    Lifecycle arguments help control the flow of your Terraform operations by creating custom rules for resource creation and destruction.

    (* data resource used to retrive the information of the external resources)

terraform authentication :
   
   * gcloud default login with the project is the identification of the terraform.(including project is optional)
   * provider block will help to identify and authenticate the resource.
   * if we run terraform in gcloud it won't ask any of the credentials as well.
   * outside gcloud will identify based the key file with GOOGLE_APPLICATION_CREDENTIALS.
   * we can use the crentials by setup the environment var and use it.

backend in terraform:
    
    * backend used to manage the state file remotely and locally.
    * without backend have to manage the state file manually, which can be error-prone and lead to     inconsistencies. 
    
