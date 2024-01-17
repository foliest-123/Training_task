provider "google" {
credentials = file("C:\\Users\\hi\\Downloads\\vijay-project-01-02377a19fe28.json")
project = var.project_id
}

resource "google_storage_bucket" "static" {
  name          = "firstbucket"
  location      = "us-central1"
  storage_class = "STANDARD"
  project = "vijay-410011"

  uniform_bucket_level_access = true
}

# Upload a text file as an object
# to the storage bucket

resource "google_storage_bucket_object" "default" {
  name         = "mybucket"
  content_type = "text/plain"
  bucket       = google_storage_bucket.static.id
}