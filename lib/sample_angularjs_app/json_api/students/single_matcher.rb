module SampleAngularjsApp
  module JsonApi
    module Students
      # Single Matcher class
      class SingleMatcher < SampleAngularjsApp::JsonApi::Students::Matcher
        def build_resource_match(resource)
          {
            students: build_single_matcher(resource)
          }
        end
      end
    end
  end
end
