Rails.application.routes.draw do
  get 'home/login'

  devise_for :users
  get 'posts/blog' => "posts#blog"

 resources :blogs
   root 'home#top'
  get 'posts/index' => "posts#index"
  get 'posts/introduction' => "posts#introduction"

  get '/' => "home#top"
  get 'home/login' => "home#login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
