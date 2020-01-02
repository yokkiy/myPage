Rails.application.routes.draw do
  devise_for :users
  get 'posts/blog' => "posts#blog"

 resources :blogs
   root 'home#top'
  get 'posts/index' => "posts#index"
  get 'posts/introduction' => "posts#introduction"

  get '/' => "home#top"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
