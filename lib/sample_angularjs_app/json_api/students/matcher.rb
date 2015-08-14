module SampleAngularjsApp
  module JsonApi
    module Students
      # Matcher class
      class Matcher < SampleAngularjsApp::JsonApi::BaseMatcher
        def build_links
          HashBuilder.build(scope: self) do
            send('SampleAngularjsApp.students') do
              href 'http://localhost/api/v1/students'
              type 'students'
            end
          end
        end

        def build_single_matcher(student)
          HashBuilder.build(scope: self) do
            sid student.sid
            sname student.sname
            semail student.semail
            smobile product.smobile
          end
        end
      end
    end
  end
end
