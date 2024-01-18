# Create new storage bucket in the US multi-region
# with standard storage


 # 4
resource "google_storage_bucket" "static" {
  name          = var.bucket_name
  location      = var.region
  storage_class = "STANDARD"
  project       = var.project_id
  force_destroy = true
}

# 1. Create VM in gcp

resource "google_compute_instance" "default" {
  name         = "my-vm"
  machine_type = "n1-standard-1"
  zone         = "us-central1-a"
  project = var.project_id

  boot_disk {
    initialize_params {
      image = "ubuntu-minimal-2210-kinetic-amd64-v20230126"
    }
  }

  network_interface {
    network = "default"
    access_config {}
  }
}

#5.

# data "google_compute_instance" "name" {
#   name = "my-vm"
#   zone = "us-central1"
#   # depends_on = [google_compute_instance.default]
# }

output "compute_output" {
  value = "hi"
  sensitive = true
  description = "compute resource output"
}


# 2 & 3

data "terraform_remote_state" "foo" {
  backend = "gcs"
  config = {
    bucket  = var.bucket_name
    prefix  = "state"
  }
  depends_on = [google_storage_bucket.static]
}


