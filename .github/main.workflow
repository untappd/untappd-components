workflow "Build and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Filter" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build" {
  needs = "Filter"
  uses = "actions/npm@master"
  args = "install"
}

action "Publish" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
