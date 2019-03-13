# workflow "Build, Test, and Publish" {
#   on = "push"
#   resolves = ["Publish"]
# }

# # Filter for master branch
# action "Master" {
#   uses = "actions/bin/filter@master"
#   args = "branch master"
# }

# action "Build" {
#   uses = "actions/npm@master"
#   args = "install"
#   needs = "Master"
# }

# action "Publish" {
#   needs = "Build"
#   uses = "actions/npm@master"
#   args = "publish --access public"
#   secrets = ["NPM_AUTH_TOKEN"]
# }

