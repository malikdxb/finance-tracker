import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
//= require_tree

application.debug = false
window.Stimulus   = application

export { application }