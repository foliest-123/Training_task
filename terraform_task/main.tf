# resource "google_storage_bucket" "sample" {
#   name          = "sampleterraformbucket"
#   project       = "vijay-410011"
#   location      = "us-central1"
#   force_destroy = true
# }

data "google_storage_bucket" "default" {
  name = "spark_data1"
}

output "bucket_metadata" {
  value = data.google_storage_bucket.default
}