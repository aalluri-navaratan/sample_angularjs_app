module SampleAngularjsApp
  module JsonApi
    module Students
      # Collection Matcher class
      class CollectionMatcher < SampleAngularjsApp::JsonApi::Students::Matcher
        def build_resource_match(resource)
          {
            students: resource.map do |student|
              build_single_matcher(student)
            end
          }
        end
      end
    end
  end
end
