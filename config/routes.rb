Rails.application.routes.draw do
   resources :blogs
   root 'home#top'
  get 'posts/index' => "posts#index"

  get '/' => "home#top"
  get 'posts/index' => "posts#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
