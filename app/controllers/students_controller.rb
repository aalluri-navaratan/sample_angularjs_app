class StudentsController < ApplicationController
	
	def index
		# render :text => " aneel"

		@students = Student.all
		#	render :json => @students.inspect
	end

	def create	
	end
	
	def show
	end

	def update
	end

	def destroy
	end

end
