json.array!(@users) do |user|
  json.extract! user, :id, :username, :male
  json.url user_url(user, format: :json)
end
