//= require jquery3
//= require popper
//= require bootstrap
//=require jquery_ujs
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import jquery from 'jquery'
window.jQuery = jquery
window.$ = jquery
import "bootstrap"