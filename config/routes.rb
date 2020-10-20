Rails.application.routes.draw do
  # get 'post', to: 'posts#create'
  # resources :posts, :comments,  :tags
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :posts do 
    resources :comments
  end
end
