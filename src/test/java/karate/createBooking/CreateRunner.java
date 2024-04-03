package karate.createBooking;

import com.intuit.karate.junit5.Karate;

public class CreateRunner {

    @Karate.Test
    Karate CreateRunner() {
        return Karate.run().relativeTo(getClass());
    }
}
