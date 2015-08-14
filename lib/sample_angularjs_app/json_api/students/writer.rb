module SampleAngularjsApp
  module JsonApi
    module Students
      # Writer class
      class Writer < SampleAngularjsApp::JsonApi::BaseWriter
        def build_links
          HashBuilder.build(scope: self) do
            send('SampleAngularjsApp.students') do
              href 'http://localhost/api/v1/students'
              type 'students'
            end
          end
        end

        def build_single_resource(student)
          HashBuilder.build(scope: self) do
            sid student.sid
            sname student.sname
            semail student.semail
            smobile student.smobile
          end
        end
      end
    end
  end
end
