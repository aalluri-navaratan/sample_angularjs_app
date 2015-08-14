class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :username
      t.string :male

      t.timestamps null: false
    end
  end
  def down
  	drop_table :users
  end
end
