Rails.application.routes.draw do
  get 'sessions/create'

  get 'sessions/destroy'

  get 'sessions_controller/create'

  get 'sessions_controller/destroy'

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :appointments
  get 'appointments' => "appointments#index"

  get 'appointments/create'

  get 'appointments/update'

  get 'appointments/destroy'

  get 'main/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

  get 'contact', to: 'main#contact'

end
